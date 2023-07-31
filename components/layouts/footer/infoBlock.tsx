import {} from 'twin.macro';

type TContent = { id: number; item: string };

type TProps = {
  title: string;
  content: TContent[];
};

const InfoBlock = ({ title, content }: TProps) => (
  <div>
    <p tw="font-bold mb-4">{title}</p>
    <ul>
      {content.map(({ id, item }) => (
        <li key={id}>{item}</li>
      ))}
    </ul>
  </div>
);

export default InfoBlock;
