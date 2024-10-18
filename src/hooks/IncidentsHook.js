import customAxios from '../CustomAxios/customAxios';

// Create Incident
const createInci = async (data) => {
    try {
        const response = await customAxios.post('/api/incidents', data);
        console.log('Incident Created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Create Incident Error:', error.response?.data || error.message);
        throw error; // Rethrow to handle in the component if needed
    }
};

// Get All Incidents
const Getinci = async () => {
    try {
        const response = await customAxios.get('/api/incidents/');
        console.log('All Incidents:', response.data);
        return response.data;
    } catch (error) {
        console.error('Get Incidents Error:', error.response?.data || error.message);
        throw error;
    }
};

// Update Incident
const UpdateInci = async (id, data) => {
    try {
        const response = await customAxios.put(`/api/incidents/${id}`, data);
        console.log('Incident Updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Update Incident Error:', error.response?.data || error.message);
        throw error;
    }
};

export { createInci, Getinci, UpdateInci };
