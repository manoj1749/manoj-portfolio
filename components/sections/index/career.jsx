import Badges from '../../utils/badge.list.util'
import Section from '../../structure/section'
import Container from '../../structure/container'
import SectionTitle from '../../blocks/section.title.block'
import careerContent from '../../../content/index/career.json'
import career from '../../../styles/sections/index/career.module.scss'

export default function Career() {
  const { header, companies } = careerContent

  // Flatten: company -> positions -> timeline items
  const items =
    companies?.flatMap((c) =>
      (c.positions || []).map((p) => {
        const tagline =
          p.tagline ||
          (Array.isArray(p.highlights) && p.highlights.length > 0 ? p.highlights[0] : '')

        return {
          date: p.date || c.date || '',
          title: p.title || '',
          company: c.company || '',
          tagline,
          stack: p.stack || []
        }
      })
    ) || []

  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={['verticalXXLrg']}>
        <SectionTitle
          title={header?.title || 'Career Highlights'}
          preTitle={header?.preTitle || 'Career'}
          subTitle={header?.subTitle || ''}
        />

        <div className={career.timeline}>
          {items.map((it, idx) => (
            <div className={career.item} key={`${it.company}-${it.title}-${idx}`}>
              <span className={career.datePill}>{it.date}</span>

              <h3 className={career.headline}>
                <span className={career.role}>{it.title}</span>
                <span className={career.dash}> - </span>
                <span className={career.companyName}>{it.company}</span>
              </h3>

              {it.tagline ? <p className={career.tagline}>{it.tagline}</p> : null}

              {/* Optional: show stack badges under each highlight (comment out if you want it cleaner) */}
              {Array.isArray(it.stack) && it.stack.length > 0 ? (
                <div className={career.stackWrap}>
                  <Badges list={it.stack} block="stack" fullContainer={null} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
