import miracle from './assets/logos/miracle.svg';
import vodafone from './assets/logos/voda.png';
import usp from './assets/logos/usp.png';
import mlh from './assets/logos/mlh.svg';
import csl from './assets/logos/csl.png';

export const site = {
	name: 'Alesana Eteuati Jr',
	// shortcut: GitHub Pages project URL, swap for a custom domain when there is one
	url: 'https://green-ranger11.github.io/Alesana-Eteuati-Jr',
	handle: 'alesana',
	role: 'Senior Software Developer @ Vodafone Samoa',
	about:
		"Talofa lava! I'm a full stack developer from Samoa, mostly writing Go and TypeScript with SvelteKit. I live in the terminal on Arch Linux and Hyprland, with Neovim, tmux and Quickshell.",
	skills: [
		'Go',
		'TypeScript',
		'SvelteKit',
		'React',
		'Next.js',
		'Node.js',
		'PocketBase',
		'PostgreSQL',
		'Supabase',
		'Tailwind CSS',
		'Python',
		'Docker',
		'C++ / Qt'
	],
	links: [
		{ label: 'github', href: 'https://github.com/Green-Ranger11' },
		{ label: 'linkedin', href: 'https://www.linkedin.com/in/alesana-eteuati-jr' },
		{ label: 'email', href: 'mailto:junior.eteuati@gmail.com' }
	]
};

export const experience = [
	{
		org: 'Miracle Trade',
		href: 'https://www.miracletrade.com',
		logo: miracle,
		details: [
			"Building Miracle Trade's trading platform across the web terminal, back office, mobile app and Go backend."
		],
		roles: [{ title: 'Full Stack Developer', dates: 'Jan 2026 - Present' }]
	},
	{
		org: 'Vodafone Samoa',
		href: 'https://vodafone.com.ws',
		logo: vodafone,
		details: [
			'Built the eSIM registration system that made Vodafone Samoa the first carrier in Samoa with eSIM support (React, Supabase, Express, Metabase).',
			'Launched the Vodafone Samoa online shop with card checkout and in-store pickup, so customers overseas can buy for people in Samoa.',
			'Build internal platforms in Go and SvelteKit for bookings, SMS, retail financing, reporting and customer portals.'
		],
		roles: [
			{ title: 'Senior Software Developer', dates: 'Jan 2023 - Present' },
			{ title: 'Software Developer', dates: 'Aug 2022 - Dec 2023' }
		]
	},
	{
		org: 'University of the South Pacific',
		href: 'https://www.usp.ac.fj',
		logo: usp,
		roles: [{ title: 'Industry Career Mentor', dates: 'Apr 2022 - Aug 2022' }]
	},
	{
		org: 'Major League Hacking',
		href: 'https://mlh.com',
		logo: mlh,
		details: [
			'Contributed to can-merge, a CLI that checks whether a pull request can be merged using the GitHub GraphQL API.'
		],
		roles: [{ title: 'Open Source Fellow', dates: 'Aug 2021 - Apr 2022' }]
	},
	{
		org: 'Computer Services Limited',
		href: 'https://csl.ws',
		logo: csl,
		details: [
			'Built an e-filing document management system for Electric Power Corporation, moving paper files to searchable digital records with role-based access (Angular, .NET Core).'
		],
		roles: [{ title: 'Full Stack Developer', dates: 'Mar 2021 - Jul 2021' }]
	}
];

export const projects = [
	{
		title: 'Laumei',
		org: 'Open Source',
		dates: 'Oct 2026 - Present',
		summary:
			"Runs Quickshell configs on macOS. Provides Quickshell's QML modules on plain Qt, with the same CLI as qs, so Linux bars and pickers load unchanged.",
		stack: ['C++', 'Qt', 'QML'],
		href: 'https://github.com/Green-Ranger11/laumei'
	},
	{
		title: 'dotfiles',
		org: 'Open Source',
		dates: 'May 2025 - Present',
		summary:
			'Catppuccin Mocha setup for Arch + Hyprland and macOS: one Quickshell bar and pickers, yabai/skhd, kitty, tmux and Neovim.',
		stack: ['QML', 'Quickshell', 'Hyprland', 'Neovim'],
		href: 'https://github.com/Green-Ranger11/dotfiles'
	}
];

export const education = [
	{
		org: 'University of the South Pacific',
		href: 'https://www.usp.ac.fj',
		logo: usp,
		roles: [{ title: 'BSE Software Engineering', dates: '2017 - 2020' }]
	}
];
