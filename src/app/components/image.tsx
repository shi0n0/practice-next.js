import Image from 'next/image';


const ImageComponent = () => {
  return (
    <div className='relative h-96'>
        <Image
        src="/test2.jpg"
        alt="Picture of the author"
        className='object-contain'
        fill
    />
    </div >
  );
}
export default ImageComponent