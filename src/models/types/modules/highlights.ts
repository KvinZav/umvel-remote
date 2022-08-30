export type HighlightsPhonePorps = {
    projects: Array<Project>,
}
type Project = {
    id: number,
    title: string,
    subtitle: string,
    description: string,
    imgUrl: string,
}
export type HighlightsTabletPorps = {
    project: Project,
    handlePrevious: ()=>void,
    handleNext: ()=>void,
}
export type HighlightsDesktopPorps = {
    project: Project,
    handlePrevious: ()=>void,
    handleNext: ()=>void,
}