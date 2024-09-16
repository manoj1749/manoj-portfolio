import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title.block'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'

export default function Recent({ mediumArticles }) {

	const feed 		= mediumArticles.feed
	const articles 	= mediumArticles.items

	return (
		<Section classProp="borderBottom">
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Articles"
					preTitle="🤔‼️💡"
					subTitle="Trying to make sense of it all"
				/>
				<div >
					<p className="centered">
						Currently under construction! Still thinking how to make sense of it all... Stay tuned for more mind-boggling insights!
					</p>
				</div>
				<style jsx>{`
					.centered {
						text-align: center;
						font-size: 1.5rem;
						color: #555;
						
					}
				`}</style>
			</Container>
		</Section>
	)
}