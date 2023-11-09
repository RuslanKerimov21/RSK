import * as qs from 'qs'
import { CONFIG } from "@/app/config";
export async function getSlide() {
    const query = qs.stringify({
        populate: "*",
    })
    const res = await fetch(`${CONFIG.api_url}sliders?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = await data.data.map((el) => {
        return {
            id: el.id,
            img: el.attributes.img,
            title: el.attributes.title,
        }
    })
    return items;
}
export async function getLists() {
    const query = qs.stringify({
        populate: "*",
    })
    const res = await fetch(`${CONFIG.api_url}info-lists?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = await data.data.map((el) => {
        return {
            id: el.id,
            img: el.attributes.img,
            path: el.attributes.path,
            name: el.attributes.title,
            description: el.attributes.description,
        }
    })
    return items;
}
export async function getNews({ slug }) {
    const query = qs.stringify({
        populate: "*",
        filters: {
            id: { $eq: slug }
        },
    })
    const res = await fetch(`${CONFIG.api_url}newses?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = await data.data.map((el) => {
        return {
            id: el.id,
            title: el.attributes.title,
            img: el.attributes.img.data,
            content: el.attributes.content,
            publication: el.attributes.publishedAt,
        }
    })
    return items;
}
export async function getQueryParams() {
    const query = qs.stringify({
        populate: "*",
    })
    const res = await fetch(`${CONFIG.api_url}type-procedures?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = await data.data.map((el) => {
        return {
            id: el.id,
            title: el.attributes.title,
        }
    })
    return items;
}
export async function getProcedures({ slug }) {
    const query = qs.stringify({
        populate: "*",
        filters: {
            type: {
                title: { $eq: slug }
            }
        },
    }, {
        encodeValuesOnly: true,
    })
    const res = await fetch(`${CONFIG.api_url}procedures?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json();
    const items = data.data.map((el) => {
        return {
            id: el.id,
            price: el.attributes.price,
            title: el.attributes.title,
            tags: el.attributes.tags.data,
            organizer: el.attributes.organizer,
            conducting: el.attributes.conducting,
            contragent: el.attributes.contragent,
            file_list: el.attributes.file_list.data,
            procedure_id: el.attributes.procedure_id,
            type: el.attributes.type.data.attributes.title,
            email_contragent: el.attributes.email_contragent,
            phone_contragent: el.attributes.phone_contragent,
            region: el.attributes.region.data.attributes.title,
            procedure_offers: el.attributes.procedure_offers.data,
            currency: el.attributes.currency_list.data.attributes.title,
            platform: el.attributes.platforms_section.data.attributes.title,
            methods_conducting: el.attributes.methods_conducting.data.attributes.title,
        }
    })
    return items;
}
export async function getSection() {
    const query = qs.stringify({
        populate: "*",
    }, {
        encodeValuesOnly: true,
    })
    const res = await fetch(`${CONFIG.api_url}platforms-sections?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json();
    const items = data.data.map((el) => {
        return {
            title: el.attributes.title,
        }
    })
    return items;
}
export async function getServices() {
    const query = qs.stringify({
        populate: "*",
    }, {
        encodeValuesOnly: true,
    })
    const res = await fetch(`${CONFIG.api_url}services?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = data.data.map((el) => {
        return {
            title: el.attributes.title,
            img: el.attributes.img.data,
        }
    })
    return items;
}
export async function getSertificates() {
    const query = qs.stringify({
        populate: "*",
    }, {
        encodeValuesOnly: true,
    })
    const res = await fetch(`${CONFIG.api_url}sertificates?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = data.data.map((el) => {
        return {
            title: el.attributes.title,
            description: el.attributes.description,
            sertificate: el.attributes.sertificat.data,
        }
    })
    return items;
}
export async function getPublications({ params }) {
    const query = qs.stringify({
        populate: {
            publications: {
                populate: ['document']
            }
        },
        filters: {
            title: { $eq: params }
        },
    }, {
        encodeValuesOnly: true,
    })
    const res = await fetch(`${CONFIG.api_url}presentations?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = await data.data.map((el) => {
        return {
            title: el.attributes.title,
            publication: el.attributes.publications.data
        }
    })
    return items;
}
export async function getRegions() {
    const query = qs.stringify({
        populate: "*",
    }, {
        encodeValuesOnly: true,
    })
    const res = await fetch(`${CONFIG.api_url}regions?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = await data.data.map((el) => {
        return {
            title: el.attributes.title,
        }
    })
    return items;
}
export async function getMethods() {
    const query = qs.stringify({
        populate: "*",
    }, {
        encodeValuesOnly: true,
    })
    const res = await fetch(`${CONFIG.api_url}methods-conductings?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = await data.data.map((el) => {
        return {
            title: el.attributes.title,
        }
    })
    return items;
}
export async function getQestions() {
    const query = qs.stringify({
        populate: "*",
    }, {
        encodeValuesOnly: true,
    })
    const res = await fetch(`${CONFIG.api_url}faqus?${query}`, {
        cache: 'force-cache',
        next: { revalidate: 1 },
    })
    const data = await res.json()
    const items = await data.data.map((el) => {
        return {
            title: el.attributes.title,
            accordion: el.attributes.faqulists,
        }
    })
    return items;
}