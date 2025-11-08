import Flag from 'react-world-flags';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowDown } from 'react-icons/fa';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const languages = [
        { code: 'fr', flag: '250', label: 'Français' },
        { code: 'en', flag: '826', label: 'English' },
    ] as const;

    const [open, setOpen] = useState(false);

    const changeLang = (code: string) => {
        i18n.changeLanguage(code);
        localStorage.setItem('i18nextLng', code);
        setOpen(false);
    };

    const currentLang = languages.find((l) => l.code === i18n.language) || languages[1]; // Default to English

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors duration-200"
                aria-label="Change language"
            >
                <Flag 
                    code={currentLang.flag} 
                    style={{ width: 24, height: 16 }} 
                    className="rounded-sm"
                />
                <span className="hidden md:inline">{currentLang.label}</span>
                <FaArrowDown
                    size={12}
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {open && (
                <div 
                    className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-md shadow-lg z-50"
                    role="menu"
                >
                    {languages.map((lang) => {
                        const isActive = lang.code === i18n.language;
                        return (
                            <button
                                key={lang.code}
                                onClick={() => changeLang(lang.code)}
                                className={`flex w-full items-center gap-2 px-4 py-2 text-sm transition-colors
                                    hover:bg-accent
                                    ${isActive ? 'bg-accent/50 font-medium' : ''}`}
                                role="menuitem"
                            >
                                <Flag 
                                    code={lang.flag} 
                                    style={{ width: 24, height: 16 }} 
                                    className="rounded-sm"
                                />
                                <span>{lang.label}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;

