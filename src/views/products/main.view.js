import("../../components/header/header.css")
import("../../components/main/main.css")
import("../../components/header/header.js")
import("../../components/main/main.js")

export const MainView = () => {
    const container = `
        <header-component></header-component>
        <main-view></main-view>
        <footer-component></footer-component>
    `
    return container
}