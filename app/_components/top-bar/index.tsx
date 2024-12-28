

import ButtonMenu from "./_components/button-menu"
import styles from  "./styles.module.css"
import MainContainer from "../main-container"
import Logo from "../logo"
import MenuLink from "./_components/MenuLink"
import { APP_ROUTES } from "@/app/_constants/app-routes"

import ThemeButton from "./_components/theme-button"


export default function TopBar(){

  
  return(
    <div className={styles.area}>
      <div className="w-full h-[26px]"></div>
      <div className="bg-[var(--color-top)] w-full">
        <MainContainer className="py-[24px] flex flex-row items-center gap-[40px] h-[80px]">
          <div className={'flex flex-row gap-[22px] items-center'}>
            <ButtonMenu />
            <Logo />
          </div>
          
          <main className={`flex flex-row gap-[12px] border-l-[var(--color-line)] border-l-[2px] flex-[1]
              h-full px-[30px] items-center justify-between
            `}>
              <header className="flex flex-row gap-[26px]">
                <MenuLink text={APP_ROUTES.public.home.name} to={APP_ROUTES.public.home.home} />
                <MenuLink text={APP_ROUTES.public.diamonds.name} to={APP_ROUTES.public.diamonds.home} />
                <MenuLink text={APP_ROUTES.public.all.name} to={APP_ROUTES.public.all.home} />
                <MenuLink text={APP_ROUTES.public.interview.name} to={APP_ROUTES.public.interview.home} />
                <MenuLink text={APP_ROUTES.public.international.name} to={APP_ROUTES.public.international.home} />
                
              </header>
              <div className={`flex flex-row gap-[32px]`}>
                <div className={`flex flex-row gap-[3px]`}>
                  <MenuLink text={"En "} to={""}/>/<MenuLink text={"Pt"} to={""}/>
                </div>
                <MenuLink text="Subscrever" to="" />
                <ThemeButton />
              </div>
          </main>
        </MainContainer>
      </div>  
    </div>
  )
}


