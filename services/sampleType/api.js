const { default: axios } = require("axios");
const { API_URL } = require("utils/constant");

exports.list = async () => {
    try {
        const response = await axios.get(API_URL + 'category/list');
        if (response?.data?.status == 200) {
            return { status: true, message: response.data.message, data: response.data.data }
        } else {
            return { status: false, message: response.data.message, data: [] }
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
        return {
            status: false, message: 'Something went wrong!!', data: [
                {
                    "_id": "669d186e0bc54250391ca7ac",
                    "name": "Kidney",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "Kidney",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                },
                {
                    "_id": "66c443c4545b7bd98be950dc",
                    "name": "Liver",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "Liver",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                },
                {
                    "_id": "66c44406545b7bd98be950dd",
                    "name": "Heart",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "Heart",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                },
                {
                    "_id": "66c44415545b7bd98be950de",
                    "name": "CATEGORY 1",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "CATEGORY 1",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                },
                {
                    "_id": "66c44444545b7bd98be950df",
                    "name": "Category 2",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "Category 2",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                },
                {
                    "_id": "66c44455545b7bd98be950e0",
                    "name": "Category 3",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "Category 3",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                },
                {
                    "_id": "66c44466545b7bd98be950e1",
                    "name": "Category 4",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "Category 4",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                },
                {
                    "_id": "66c44477545b7bd98be950e2",
                    "name": "Category 5",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "Category 5",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                },
                {
                    "_id": "66c44491545b7bd98be950e3",
                    "name": "Category 6",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "Category 6",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                },
                {
                    "_id": "66c444a0545b7bd98be950e4",
                    "name": "Category 7",
                    "icon": "https://media-cdn.redcliffelabs.com/media/category-files/20/140416b5-e16b-432f-bf96-e60435468829.webp",
                    "icon_2": null,
                    "id": 20,
                    "display_name": "Category 7",
                    "icon_1": null,
                    "order": 72,
                    "__v": 0
                }
            ]
        }
    }
}