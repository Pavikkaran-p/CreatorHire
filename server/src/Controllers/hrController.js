import HR from '../Models/hrModel.js';


export const updateProfile = async (req, res) => {
    const { id } = req.params;
    const {
        companyName,
        location,
        responsibilities,
        companyTechStack,
        foundedIn,
        employeeCount
    } = req.body;
    try {
        const hr = await HR.findById(id);
        if (!hr) {
            return res.status(404).send({ message: 'HR not found' });
        }
        hr.companyName = companyName;
        hr.location = location;
        hr.responsibilities = responsibilities;
        hr.companyTechStack = companyTechStack;
        hr.foundedIn = foundedIn;
        hr.employeeCount = employeeCount;
        await hr.save();
        res.status(200).send(hr);
    } catch (error) {
        res.status(500).send(error);
    }
};