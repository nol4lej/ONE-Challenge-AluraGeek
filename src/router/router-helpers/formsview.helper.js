export const loadForms = async (hash) => {
    const formPathname = hash.substring(2)
    const formView = await import(`../../views/forms/${formPathname}.view`)
    const formViewContent = formView[formPathname];
    return formViewContent()
}