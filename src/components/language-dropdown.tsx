import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import LanguageDropdownSelect from "./language-dropdown-select";

export default function LanguageDropdown({ className }: { className?: string }) {
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2">
      <LanguageDropdownSelect defaultValue={locale} label="Select a locale">
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </LanguageDropdownSelect>
    </div>
  );
}
