import { Persuasif } from '../molecules';
import { Card } from '../ui';

export function Contact() {
  return (
    <>
      <div>
        <div>
          <h1 className="text-2xl">Mari berkomunikasi</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos,
            harum sit blanditiis nihil veritatis. Distinctio quos minus quisquam
            nesciunt?
          </h3>
        </div>
        <div className="flex gap-5">
          <Card>
            <h1>Informasi Kontak</h1>
          </Card>
          <Card>
            <h1>Kirim pesan</h1>
          </Card>
        </div>
      </div>
      <Persuasif />
    </>
  );
}
