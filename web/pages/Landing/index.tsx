import { Globe } from '../../components/Globe'
import React from 'react'

export default function Landing() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex" />

			<div className="relative z-[-1] flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
				<div className="flex flex-row">
					<Globe />
					<h2 className="mb-3 text-9xl font-semibold">Alibi</h2>
				</div>
				<h3 className="text-4xl font-semibold">
					High-resolution location proofs with TLSNotary
				</h3>
			</div>

			<div className="flex flex-col space-y-4 items-center">
				<a href="/drop">
					<button className="backdrop-blur-md bg-white/30 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 backdrop-blur-md bg-white/30">
						<span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md bg-gray-100">
							Verify your TLSNotary proof
						</span>
					</button>
				</a>

				<a href="/how">
					<button className="backdrop-blur-md bg-white/30 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 backdrop-blur-md bg-white/30">
						<span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md bg-gray-100">
							How it works
						</span>
					</button>
				</a>
			</div>
			<div className="mb-64 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left place-items-center">
				<a
					href="https://chromewebstore.google.com/detail/tlsn-extension/gcfkkledipjbgdbimfpijgbkhajiaaph?pli=1"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 col-start-2"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Install the extension{' '}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Install the TLS Notary extension for Chrome.
					</p>
				</a>

				<a
					href="./favicon.ico"
					download={true}
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Download the plugin{' '}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Add the plugin to the TLS Notary extension.
					</p>
				</a>
			</div>
		</main>
	)
}
