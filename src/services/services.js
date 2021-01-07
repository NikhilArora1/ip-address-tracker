const ipify = 'at_zjiWwGCCbVPhPRR7haXA3yvgVnUfR';

export async function getLocation(param) {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${ipify}&${param}`);
    const data = await response.json();
    return data;
}
