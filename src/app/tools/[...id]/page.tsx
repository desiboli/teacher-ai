type Props = Promise<{ id: string }>

export default async function ToolPage(props: { params: Props }) {
  const params = await props.params

  return <main>Tool page: {params.id}</main>
}
