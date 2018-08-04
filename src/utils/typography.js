import Typography from "typography"
import Theme from 'typography-theme-lincoln'

// overide some styles
Theme.baseFontSize = '18px'

const typography = new Typography(Theme)

export default typography
export const rhythm = typography.rhythm