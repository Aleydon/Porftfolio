import {
  CssIcon,
  GitHubIcon,
  JestIcon,
  ReactIcon
} from '@/components/ui/icons';
import { DockerIcon } from '@/components/ui/icons/DockerIcon';
import { NextIcon } from '@/components/ui/icons/NextIcon';
import { PostgreSql } from '@/components/ui/icons/PostgreSql';
import { TailwindIcon } from '@/components/ui/icons/TailwindIcon';

import type { IconProps } from '@/components/ui/icons/types';
import type { ComponentType } from 'react';

export type IconName =
  | 'react'
  | 'nextjs'
  | 'tailwind'
  | 'css'
  | 'docker'
  | 'postgresql'
  | 'github'
  | 'jest';

export const ICON_MAP: Record<IconName, ComponentType<IconProps>> = {
  react: ReactIcon,
  nextjs: NextIcon,
  tailwind: TailwindIcon,
  css: CssIcon,
  docker: DockerIcon,
  postgresql: PostgreSql,
  github: GitHubIcon,
  jest: JestIcon
};

export const TECHNOLOGY_ICONS: Record<string, IconName> = {
  React: 'react',
  'Next.js': 'nextjs',
  Tailwind: 'tailwind',
  Css: 'css',
  Docker: 'docker',
  PostgreSQL: 'postgresql',
  GitHub: 'github',
  Jest: 'jest'
};
