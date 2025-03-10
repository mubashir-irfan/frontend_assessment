import { useTranslation } from 'react-i18next';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiMagnifyingGlass } from 'react-icons/hi2';

type HeaderProps = {
  title: string;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const Header = ({ title, setIsMenuOpen }: HeaderProps) => {
  const { t } = useTranslation();


  return (
    <header className="h-[6.8125rem] md:h-[6.25rem] lg:border-b lg:border-border-light border-solid dark:border-0">
      <div className="px-4 py-2 flex items-center justify-between lg:justify-start dark:bg-background-dark-secondary dark:text-whites">
        <div className="lg:hidden">
          <AiOutlineMenu
            size={24}
            className="text-soar dark:text-white cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
        <h1 className="font-[600] sm:text-[1.25rem] md:text-[1.75rem] text-soar lg:ml-4 lg:text-left text-center flex-grow dark:text-white">
          {title}
        </h1>

      </div>

      <div
        className={`sm:hidden max-w-[90%] mx-auto mb-2 flex gap-2 justify-center items-center px-4 py-3 bg-background-secondary text-text-secondary rounded-[2.5rem]
        focus:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-soar focus-visible:ring-offset-1
        focus-visible:ring-offset-background-white`}
      >
        <HiMagnifyingGlass size={25} />
        <input
          className="bg-transparent placeholder-text-tertiary focus:outline-none"
          placeholder={t('navbar.searchForSomething')}
        />
      </div>
    </header>
  );
};

export default Header;
