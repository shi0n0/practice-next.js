import Image from 'next/image';


export default function ImageComponent() {
  return (
    <Image
      src="/test.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}