import {getDirectusClient} from "../getDirectusClient"
export const getNewsList = async (page=1) =>{
    
    try {
        const directus = await getDirectusClient();
        const response = await directus.items('articles').readByQuery({
            page: page,
            meta: 'total_count',
            filter: {
                type: {
                    _eq: 'news',
                    },
	            },
            });
            
        return response
    } catch (error) {
       
        console.log(error)
    }
    
}

export const getNewById = async (id) =>{
   
    try {
        const directus = await getDirectusClient();
        const response = await directus.items('articles').readByQuery({
            type: { _eq: 'news' },
            filter: {
                id: {
                    _eq: id,
                    },
	            },
            });
            
        return Array.isArray(response.data) ? response.data[0] : {}
    } catch (error) {
        console.log(error)
    }
    
}

export const getPostsList = async (page=1) =>{
   
    try {
         const directus = await getDirectusClient();
        const response = await directus.items('articles').readByQuery({
            page: page,
            meta: 'total_count',
            filter: {
                type: {
                    _eq: 'post',
                    },
	            },
            });
       
        return response
    } catch (error) {
        console.log(error)
    }
    
}
export const getPostById = async (id) =>{
   
    try {
         const directus = await getDirectusClient();
         const response = await directus.items('articles').readByQuery({
            type: { _eq: 'post' },
            filter: {
                id: {
                    _eq: id,
                    },
	            },
            });
            

        return Array.isArray(response.data) ? response.data[0] : {}
    } catch (error) {
        console.log(error)
    }
    
}
export const searchArticles = async (keyword) =>{
   
    try {
         const directus = await getDirectusClient();
        const response = await directus.items('articles').readByQuery({
           filter: {
            "_or": [
                {
                    title: {
                        _contains: keyword,
                    },
	           
                },
                {
                    content: {
                        _contains: keyword,
                    },
                }
                ]
            }    
        });
         console.log(response)
        return response
    } catch (error) {
         console.log(error)
    }
    
}

export const getPostsByTag = async (tag) =>{
   
    try {
         const directus = await getDirectusClient();
         const response = await directus.items('articles').readByQuery({
                tags: { _contains: tag }
            });
        return response
    } catch (error) {
        console.log(error)
    }
    
}
export const getPostsByCategory = async (category) =>{
   
    try {
         const directus = await getDirectusClient();
         const response = await directus.items('articles').readByQuery({
                categories: { _contains: category }
            });
       
        return response
    } catch (error) {
        console.log(error)
    }
    
}
export const getAll = async (category) =>{
   
    try {
         const directus = await getDirectusClient();
         const response = await directus.items('articles').readByQuery({
               limit:-1
            });
       
        return response
    } catch (error) {
        console.log(error)
    }
    
}


