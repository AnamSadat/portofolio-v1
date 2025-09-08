import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container grid mx-auto grid-cols-2 items-center w-full py-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold">Hello, Saya Anam Sadat</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          magni dicta laborum, debitis totam reiciendis quasi soluta cum
          suscipit delectus.
        </p>
        <div>
          <Button>Download cv</Button>
        </div>
      </div>
      <div className="flex  items-center justify-center w-full">
        <Image src={'/image.png'} alt="saya" width={300} height={0} />
      </div>
    </div>
  );
}
