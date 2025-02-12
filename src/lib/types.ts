import { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export type ExternalLinksTypes = {
  GITHUB_REPO: string;
};

export type NavLinkTypes = {
  label: string;
  href: string;
};

export type SocialLinkTypes = {
  icon: LucideIcon;
  url: string;
};

export type ExperienceDetailTypes = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  currentlyWorkHere?: boolean;
  summary: string[];
};
