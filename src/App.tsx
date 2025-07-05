import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
        possimus rem reprehenderit a officiis odio pariatur asperiores. Ad
        veniam doloremque dicta, dolorem dolores ex ab ea id quaerat, enim
        dolorum laboriosam, itaque voluptas vel adipisci consequuntur? Ipsum
        tempore beatae laudantium modi qui illo, animi similique voluptas
        dolorum, aperiam quos!
      </p>
    </>
  );
}
