export type Project = {
  name: string
  desc: string
  link: string | null
  repo: string | null
  image: string | null
  tools: Array<string>
}

export type WorkingExperience = {
  company: string
  position: string
  period: string
  description: string
}

export type Portfolio = {
  project: Array<Project>
  'working-experience': Array<WorkingExperience>
}
