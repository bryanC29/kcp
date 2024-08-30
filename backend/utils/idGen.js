export const uidGen = async (name, role = 'student') => {
    const nameTag = name.substring(0, 3);
    const roleCode = role.substring(0, 1) + role.substr(-1, 1);
    const year = new Date().getFullYear().toString().substring(2);
    const month = new Date().getMonth() + 1;
    const random = Math.floor(Math.random() * (10000 - 2000)) + 2000;
    const id = nameTag + year + (month < 10 ? '0' + month : month) + random + roleCode;
    return id.toUpperCase();
}