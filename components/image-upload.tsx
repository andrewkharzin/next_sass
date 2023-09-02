import React, { useEffect, useState } from "react";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

export const ImageUpload = ({
  value,
  onChange,
  disabled,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedImage(file);

      // You can handle file upload logic here
      // For example, you can upload the selected image to your server and get the URL
      // Once you have the URL, you can call onChange with that URL.
      // For now, I'll just use a local URL for demonstration.
      const localImageUrl = URL.createObjectURL(file);
      onChange(localImageUrl);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={disabled}
        style={{ display: "none" }}
        ref={(input) => input && input.setAttribute("data-testid", "image-upload-input")}
      />
      <label
        htmlFor="image-upload-input"
        className="
          p-4 
          border-4 
          border-dashed
          border-primary/10 
          rounded-lg 
          hover:opacity-75 
          transition 
          flex 
          flex-col 
          space-y-2 
          items-center 
          justify-center
        "
      >
        <div className="relative h-40 w-40">
          <img
            alt="Upload"
            src={value || "/placeholder.svg"}
            className="rounded-lg object-cover"
          />
        </div>
      </label>
    </div>
  );
};
