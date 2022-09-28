import React from "react";

interface Props {
  label: string;
  url: string;
  featured: boolean;
}

export default function Link({ label, url, featured }: Props) {
  return (
    <div>
      <a
        target="_blank"
        href={url}
        className="text-2xl block w-full cursor-pointer bg-[#9b59b6] p-3 rounded-lg hover:bg-[#8e44ad] transition-all"
      >
        {label}
      </a>
    </div>
  );
}
