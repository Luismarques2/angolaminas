import styles from "./styles.module.css";
import Link from "next/link";
import { APP_ROUTES } from "@/app/_constants/app-routes";
import MainContainer from "../main-container";
import Logo from "../logo";


export default function Footer({pinted}: {pinted?:boolean}) {
  return (
    <footer className={styles.area} style = {pinted ? {
      
      color: 'white'
    }: {}}>
      <MainContainer>
          <div className={styles.body}>
            <div className={styles.description}>
             
              <Logo />
              

              <p className="paragraph" style={{}}>
              Transforme a sua jornada no setor mineiro e descubra uma maneira inovadora de explorar as riquezas minerais de Angola com a Angola Minas. Oferecemos uma plataforma exclusiva que proporciona informações precisas, conteúdos relevantes e insights estratégicos para impulsionar o desenvolvimento do setor de mineração e energia.
                {/*  Baixe o nosso app agora mesmo! */}
              </p>

              {/* <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Link href="#">
                  <Image
                    width={127}
                    height={40}
                    src="/appstore.png"
                    alt="baixar chana mais na app store"
                    style={{ borderRadius: 8 }}
                  />
                </Link>

                <Link href="#">
                  <Image
                    width={136}
                    height={40}
                    src="/playstore.png"
                    alt="baixar chana mais na play store"
                    style={{ borderRadius: 8 }}
                  />
                </Link>
              </div> */}
            </div>

            <ul className={styles.list}>
  <li>
    <span className="paragraph" style={{ fontWeight: 700 }}>
      Sobre Nós
    </span>
  </li>
  <li>
    <Link href={APP_ROUTES.public.about.home} className="paragraph">
      Angola Minas
    </Link>
  </li>
  <li>
    <Link href="/for-industry" className="paragraph">
      Para o Setor
    </Link>
  </li>
  <li>
    <Link href="/" className="paragraph">
      Notícias
    </Link>
  </li>
</ul>

<ul className={styles.list}>
  <li>
    <span className="paragraph" style={{ fontWeight: 700 }}>
      Políticas e Termos
    </span>
  </li>
  <li>
    <Link href="/community-guidelines" className="paragraph">
      Normas da Comunidade
    </Link>
  </li>
  <li>
    <Link href="/terms-conditions" className="paragraph">
      Termos e Condições
    </Link>
  </li>
  <li>
    <Link href="/privacy-policy" className="paragraph">
      Política de Privacidade
    </Link>
  </li>
  <li>
    <Link href="/cookies-policy" className="paragraph">
      Política de Cookies
    </Link>
  </li>
</ul>

<ul className={styles.list}>
  <li>
    <span className="paragraph" style={{ fontWeight: 700 }}>
      Suporte e Contato
    </span>
  </li>
  <li>
    <Link href="/faq" className="paragraph">
      Perguntas Frequentes
    </Link>
  </li>
  <li>
    <Link href="/contact-support" className="paragraph">
      Fale Conosco
    </Link>
  </li>
</ul>

            <div className={styles.border} />

            <span className="paragraph m-auto">
              © Revista Angola Minas - Todos os direitos reservados: Desenvolvido por Alçada Digital
            </span>
          </div>
      </MainContainer>
    </footer>
  );
}