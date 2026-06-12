import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar2.png"
        alt="avatar"
        width={590}
        height={900}
        className="translate-z-0 w-full h-full object-contain object-bottom"
      />
    </div>
  );
};

export default Avatar;