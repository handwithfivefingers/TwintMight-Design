import clsx from 'clsx'
import './Skeleton.scss'

interface ISkeleton {
    active?: boolean
}
interface IParagraphSkeleton extends ISkeleton {
    rows?: number
}

interface IDefaultSkeleton extends ISkeleton {
    width?: string
}
const Skeleton = ({ width = '100%', active = true }: IDefaultSkeleton) => {
    const styles = {
        width: width,
    }
    return (
        <div className="tm-skeleton">
            <div style={styles} className={clsx('tm-skeleton-default', { ['tm-skeleton-active']: active })}></div>
        </div>
    )
}

const Paragraph = ({ rows = 3, active = true }: IParagraphSkeleton) => {
    return (
        <div className="tm-skeleton">
            <ul className="tm-skeleton-paragraph">
                {[...Array(rows).keys()].map(num => {
                    return (
                        <li key={`skeleton-paragraph-${num}`} className={clsx({ ['tm-skeleton-active']: active })}></li>
                    )
                })}
            </ul>
        </div>
    )
}

Skeleton.Paragraph = Paragraph

export type { IParagraphSkeleton, IDefaultSkeleton, ISkeleton }

export default Skeleton
