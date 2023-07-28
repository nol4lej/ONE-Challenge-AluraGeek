export const loadMain = async () => {
    const mainViewModule = await import("../../views/products/main.view");
    const mainViewContent = mainViewModule.MainView;
    return mainViewContent();
};