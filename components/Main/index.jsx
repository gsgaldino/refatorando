import * as React from 'react';
import Tilt from 'react-tilt';
import { Button } from '@chakra-ui/react';

import Provider from '../Provider';

import styles from './index.module.css';

export default function Main() {
  const [isTiltTurned, setIsTiltTurned] = React.useState(true);

  const handleClick = event => {
    setIsTiltTurned(!isTiltTurned);
  }

  return (
    <main className={styles.main}>
      <Provider>
        <div className={styles.flexSection}>

          <div className={styles.flexItem}>
            <Tilt
              options={{ max: 15, reset: true }}
              className={styles.tilt}
            >
              <div
                className={`${styles.glass} ${styles.title}`}
              >
                <h1>Entre para a <span>era digital</span></h1>
                <p>Seu projeto com <span>visibilidade</span> e <span>destaque</span></p>
                <p>Não fique fora dessa: faça já o seu orçamento sem compromisso e <span>tire suas idéias do papel</span> com a Ref@t!</p>
                <p>Inscreva-se e entraremos em contato:</p>

                <a href="#form">
                  <Button
                    colorScheme="blue"
                    variant="solid"
                    size="lg"
                    width="80%"
                    onClick={handleClick}
                    marginTop="10px"
                    _hover={{
                      background: '#44AEB5',
                      filter: 'brightness(90%)'
                    }}
                  >Inscrever-se</Button>
                </a>

              </div>
            </Tilt>
          </div>

          <div className={styles.flexItem}>
            <img src="/tech-man.png" alt="Desenho de rapaz interagindo com equipamentos tecnológicos." />
          </div>
        </div>
      </Provider>
    </main>
  );
};
