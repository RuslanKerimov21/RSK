import { Breadcrumbs, Filters, Lots, Search } from "@/app/components";
import { getMethods, getProcedures, getQueryParams, getRegions, getSection } from "@/api/api";
export const metadata = {
    title: 'Закупки',
    description: 'Все списки лотов и закупок',
}
export default async function Procedure() {
    const section = await getSection();
    const regions = await getRegions();
    const methods = await getMethods();
    const list = await getProcedures({});
    const queryparams = await getQueryParams();
    const breadcrumb = [{ title: 'Закупки', link: 'procedures' }];
    return (
        <div className="container">
            <Breadcrumbs data={breadcrumb} />
            <h1 className="page-title">Закупки</h1>
            <Filters query={queryparams} />
            <Search section={section} regions={regions} methods={methods} />
            <Lots childrens={list} />
        </div>
    )
}