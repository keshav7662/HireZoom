export const HandleEditJob = async(id,navigate) => {
    try {
        navigate(`/create-job/${id}`)
    } catch (error) {
        console.log(error)
    }
}