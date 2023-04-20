
export const getMenusData = async () => {
    const menusData = await fetch('menu.json')
    const menus = await menusData.json()

    return menus
}