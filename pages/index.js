import React from 'react';
import { useRouter }  from 'next/router';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

import appConfig from '../config.json';
// import video '../public/video.mp4';



function Titulo(props) {

    const Tag = props.tag || 'h1';

    return (
        <>
         <Tag>{props.children}</Tag>    

         <style jsx>{`         
            
            ${Tag} {
                color:  ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }

            `}</style>
        </>   
    );
}


// // componente react
// function HomePage() {
//     return (
//         <div >
//             <GlobalStyle />

//             <Titulo tag="h2">Boas vindas de Volta !</Titulo>
//             <h3>Discord  - Alura Mitrix</h3>
//         </div>
//     );
// }


// export default HomePage



export default function PaginaInicial() {
    const [username, setUsername] = React.useState('valdirsillva');
    
    // hook do next
    const routeamento = useRouter();

    function handleChange(valorDigitado) {
      console.log('Estou recebendo algo do input ');
      let minValue = 5;

      if (valorDigitado.length >= minValue) {
          // atualiza o valor quando o usuário digitar
          setUsername(valorDigitado);
      }
    }

    function handleSubmit() {
       event.preventDefault();
      //  window.location.href = '/chat';

       routeamento.push(`/chat?username=${username}`);
     
    }

    function timeReproduction() {

          event.playbackRate = 0.3;

        console.log('esta rodando');
      
// function slowPlaySpeed() { 
//     vid.playbackRate = 0.5;
// } 
    }


  
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            // backgroundColor: appConfig.theme.colors.primary[500],
            // backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
            // backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >


          <video 
           
            autoplay="autoplay"
            muted
            loop
            
          
            >
            <source src="video.mp4" type="video/mp4"/>
         </video>
           
         <style jsx>{`
            
           
            
            video {
                width="100%" 
                height="100%"
                color:  ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
                display: flex;
                position: absolute;
                z-index: -1;
                box-sizing: border-box;
                
            }

            `}</style>
      
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={event => handleSubmit(event.target.value)}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Boas vindas de volta!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>

              {/* <input 
               type="text" 
               value={username}
               onChange={event => handleChange(event.target.value)}
               /> */}
  
              <TextField
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                 
                }}
                value={username}
                onChange={event => handleChange(event.target.value)}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }
  