"use client";

import React, { useRef, useEffect } from 'react';
import { CldImage, getCldVideoUrl } from 'next-cloudinary';

const extractPublicId = (url) => {
  if (!url.includes('cloudinary.com')) return url;
  const parts = url.split('/');
  
  // Find where the asset path starts (after /upload/, /v123/, or /video/)
  const uploadIndex = parts.indexOf('upload');
  const videoIndex = parts.indexOf('video');
  
  let startIndex = -1;
  if (uploadIndex !== -1) startIndex = uploadIndex + 1;
  else if (videoIndex !== -1 && parts[videoIndex + 1] === 'upload') startIndex = videoIndex + 2;
  
  if (startIndex === -1) return url;
  
  // Skip the version part (v123456) if present
  if (parts[startIndex] && parts[startIndex].startsWith('v') && !isNaN(parts[startIndex].slice(1))) {
    startIndex++;
  }
  
  const publicIdWithExtension = parts.slice(startIndex).join('/');
  // Remove file extension (e.g. .jpg, .mp4, .webp)
  return publicIdWithExtension.replace(/\.[^/.]+$/, "");
};

/**
 * Optimised Cloudinary Image Component
 */
export const CloudinaryImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  crop = "fill", 
  priority = false, 
  sizes = "100vw", 
  quality = "auto",
  format = "auto",
  ...props 
}) => {
  const publicId = extractPublicId(src);
  
  // Use deliveryType fetch if the src is not a Cloudinary URL and extraction failed
  const isExternal = !src.includes('cloudinary.com') && src.startsWith('http');
  const deliveryType = isExternal ? "fetch" : "upload";

  // Conditionally set width/height only if fill is not present
  const dimensions = props.fill ? {} : { width: width || 800, height: height || 600 };

  return (
    <CldImage
      {...dimensions}
      src={isExternal ? src : publicId}
      alt={alt}
      crop={crop}
      sizes={sizes}
      priority={priority}
      quality={quality}
      format={format}
      deliveryType={deliveryType}
      {...(priority ? { fetchPriority: "high" } : { loading: "lazy" })}
      {...props}
    />
  );
};

/**
 * Optimised Cloudinary Video Component (Background Video Style)
 */
export const CloudinaryVideo = ({ 
  src, 
  width, 
  height, 
  autoPlay = true, 
  muted = true, 
  loop = true, 
  playsInline = true, 
  className, 
  poster,
  ...props 
}) => {
  const videoRef = useRef(null);
  const publicId = extractPublicId(src);
  
  // Use explicit Cloudinary cloud name for reliability
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dhlvq35cc';

  // Construct a high-performance auto-optimized URL
  const videoTransformations = ["q_auto", "f_auto", "vc_auto"];
  if (width) videoTransformations.push(`w_${width}`);
  if (height) videoTransformations.push(`h_${height}`);
  videoTransformations.push("c_fill");

  // Always use transformations for better performance
  const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${videoTransformations.join(",")}/${publicId}.mp4`;

  // Construct poster URL if publicId is available
  const posterUrl = poster 
    ? (typeof poster === 'string' && poster.includes('cloudinary.com') 
        ? poster 
        : `https://res.cloudinary.com/${cloudName}/video/upload/so_auto,q_auto,f_jpg/${publicId}.jpg`)
    : undefined;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      if (autoPlay) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Autoplay was prevented:", error);
          });
        }
      }
    }
  }, [videoUrl, autoPlay]);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      poster={posterUrl}
      width={width}
      height={height}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      className={className}
      style={{ objectFit: 'cover' }}
      onEnded={(e) => {
        if (loop) {
          e.target.currentTime = 0;
          e.target.play().catch(() => {});
        }
      }}
      {...props}
    />
  );
};
