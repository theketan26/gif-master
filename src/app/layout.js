import './globals.css';


export const metadata = {
	title: 'GIF Master',
	description: 'Search GIF for fun',
}


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className = 'w-screen h-screen bg-gradient-to-l from-green-700 via-cyan-800 to-slate-800'>
				{children}
			</body>
		</html>
	)
}
