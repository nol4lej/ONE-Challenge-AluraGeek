export const loadPanel = async (hash) => {
    let panelPathname;
    panelPathname = hash.substring(2)
    if(panelPathname.includes("/")){
        const divided = panelPathname.split("/")
        panelPathname = divided[1]
    }
    const panelView = await import(`../../views/panel/${panelPathname}.view`)
    const panelViewContent = panelView[panelPathname];
    return panelViewContent()
}