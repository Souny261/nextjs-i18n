"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GlobeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const LanguagePicker: React.FC = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    function handleLocaleChange(newLocale: string): void {
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
        // router.replace(newPathname);
        router.push(newPathname);
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button type="button" variant="ghost" size="icon">
                    <GlobeIcon className="size-5" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuCheckboxItem
                    checked={locale === "en"}
                    onClick={() => {
                        handleLocaleChange("en");
                    }}
                >
                    English
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={locale === "la"}
                    onClick={() => {
                        handleLocaleChange("la");
                    }}
                >
                    Lao
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};