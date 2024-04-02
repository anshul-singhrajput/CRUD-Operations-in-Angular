var config = require('../dbConfig');
const sql = require('mssql');

async function insertData(data) {
    try {
        let pool = await sql.connect(config);
        let results = pool.request()

            .input('Date', sql.Date, data.Date)
            .input('YourName', sql.NVarChar(50), data.YourName)
            .input('BusinessName', sql.NVarChar(50), data.BusinessName)
            .input('Profession', sql.NVarChar(50), data.Profession)
            .input('Location', sql.NVarChar(150), data.Location)
            .input('PreviousTypeOfJobs', sql.NVarChar(75), data.PreviousTypeOfJobs)
            .input('FamilyInformation', sql.NVarChar(20), data.FamilyInformation)
            .input('Spouse', sql.NVarChar(20), data.Spouse)
            .input('Children', sql.NVarChar(10), data.Children)
            .input('Animals', sql.NVarChar(10), data.Animals)
            .input('Hobbies', sql.NVarChar(50), data.Hobbies)
            .input('ActivityOfInterest', sql.NVarChar(50), data.ActivityOfInterest)
            .input('CityOfResidence', sql.NVarChar(10), data.CityOfResidence)
            .input('BurningDesire', sql.NVarChar(50), data.BurningDesire)
            .input('SomethingNoOneKnowsAboutMe', sql.NVarChar(50), data.SomethingNoOneKnowsAboutMe)
            .input('KeyToSuccess', sql.NVarChar(50), data.KeyToSuccess)
            .input('BusinessGoals', sql.NVarChar(50), data.BusinessGoals)
            .input('BusinessAccomplishments', sql.NVarChar(50), data.BusinessAccomplishments)
            .input('BusinessInterests', sql.NVarChar(50), data.BusinessInterests)
            .input('BusinessNetworks', sql.NVarChar(50), data.BusinessNetworks)
            .input('BusinessSkills', sql.NVarChar(50), data.BusinessSkills)
            .input('PersonalGoals', sql.NVarChar(50), data.PersonalGoals)
            .input('PersonalAccomplishments', sql.NVarChar(50), data.PersonalAccomplishments)
            .input('PersonalInterests', sql.NVarChar(50), data.PersonalInterests)
            .input('PersonalNetworks', sql.NVarChar(50), data.PersonalNetworks)
            .input('PersonalSkills', sql.NVarChar(50), data.PersonalSkills)
            .query(` INSERT INTO Information (Date, YourName, BusinessName, Profession, Location, PreviousTypeOfJobs, FamilyInformation, Spouse, Children, Animals, Hobbies, ActivityOfInterest, CityOfResidence, BurningDesire, SomethingNoOneKnowsAboutMe, KeyToSuccess, BusinessGoals, BusinessAccomplishments, BusinessInterests, BusinessNetworks, BusinessSkills, PersonalGoals, PersonalAccomplishments, PersonalInterests, PersonalNetworks, PersonalSkills)
            VALUES (@Date, @YourName, @BusinessName, @Profession, @Location, @PreviousTypeOfJobs, @FamilyInformation, @Spouse, @Children, @Animals, @Hobbies, @ActivityOfInterest, @CityOfResidence, @BurningDesire, @SomethingNoOneKnowsAboutMe, @KeyToSuccess, @BusinessGoals, @BusinessAccomplishments, @BusinessInterests, @BusinessNetworks, @BusinessSkills, @PersonalGoals, @PersonalAccomplishments, @PersonalInterests, @PersonalNetworks, @PersonalSkills)
        `)
        return results;
    }
    catch (error) {
        console.log(error);
    }
}

async function getInfoData() {
    try {
        let pool = await sql.connect(config);
        let results = await pool.request()
            .query(`select * from Information`);
        return results;
    }
    catch (error) {
        console.log(error);
    }
}

async function DeleteInfobyId(ID) {
    try {
        let pool = await sql.connect(config);
        let results = await pool.request()
            .input('ID', sql.Int, ID)
            .query('DELETE FROM Information WHERE ID = @ID');
        return results;
    }
    catch (error) {
        console.log(error);
    }
}

async function UpdateInfo(data) {
    try {
        let pool = await sql.connect(config);
        let results = await pool.request()
            .input('ID', sql.Int, data.ID)
            .input('Date', sql.Date, data.Date)
            .input('YourName', sql.NVarChar(50), data.YourName)
            .input('BusinessName', sql.NVarChar(50), data.BusinessName)
            .input('Profession', sql.NVarChar(50), data.Profession)
            .input('Location', sql.NVarChar(150), data.Location)
            .input('PreviousTypeOfJobs', sql.NVarChar(75), data.PreviousTypeOfJobs)
            .input('FamilyInformation', sql.NVarChar(20), data.FamilyInformation)
            .input('Spouse', sql.NVarChar(20), data.Spouse)
            .input('Children', sql.NVarChar(10), data.Children)
            .input('Animals', sql.NVarChar(10), data.Animals)
            .input('Hobbies', sql.NVarChar(50), data.Hobbies)
            .input('ActivityOfInterest', sql.NVarChar(50), data.ActivityOfInterest)
            .input('CityOfResidence', sql.NVarChar(10), data.CityOfResidence)
            .input('BurningDesire', sql.NVarChar(50), data.BurningDesire)
            .input('SomethingNoOneKnowsAboutMe', sql.NVarChar(50), data.SomethingNoOneKnowsAboutMe)
            .input('KeyToSuccess', sql.NVarChar(50), data.KeyToSuccess)
            .input('BusinessGoals', sql.NVarChar(50), data.BusinessGoals)
            .input('BusinessAccomplishments', sql.NVarChar(50), data.BusinessAccomplishments)
            .input('BusinessInterests', sql.NVarChar(50), data.BusinessInterests)
            .input('BusinessNetworks', sql.NVarChar(50), data.BusinessNetworks)
            .input('BusinessSkills', sql.NVarChar(50), data.BusinessSkills)
            .input('PersonalGoals', sql.NVarChar(50), data.PersonalGoals)
            .input('PersonalAccomplishments', sql.NVarChar(50), data.PersonalAccomplishments)
            .input('PersonalInterests', sql.NVarChar(50), data.PersonalInterests)
            .input('PersonalNetworks', sql.NVarChar(50), data.PersonalNetworks)
            .input('PersonalSkills', sql.NVarChar(50), data.PersonalSkills)
            .query(` UPDATE Information
        SET
          Date = @Date,
          YourName = @YourName,
          BusinessName = @BusinessName,
          Profession = @Profession,
          Location = @Location,
          PreviousTypeOfJobs = @PreviousTypeOfJobs,
          FamilyInformation = @FamilyInformation,
          Spouse = @Spouse,
          Children = @Children,
          Animals = @Animals,
          Hobbies = @Hobbies,
          ActivityOfInterest = @ActivityOfInterest,
          CityOfResidence = @CityOfResidence,
          BurningDesire = @BurningDesire,
          SomethingNoOneKnowsAboutMe = @SomethingNoOneKnowsAboutMe,
          KeyToSuccess = @KeyToSuccess,
          BusinessGoals = @BusinessGoals,
          BusinessAccomplishments = @BusinessAccomplishments,
          BusinessInterests = @BusinessInterests,
          BusinessNetworks = @BusinessNetworks,
          BusinessSkills = @BusinessSkills,
          PersonalGoals = @PersonalGoals,
          PersonalAccomplishments = @PersonalAccomplishments,
          PersonalInterests = @PersonalInterests,
          PersonalNetworks = @PersonalNetworks,
          PersonalSkills = @PersonalSkills
        WHERE ID = @ID
    `)
        return results;
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = {
    insertData: insertData,
    getInfoData: getInfoData,
    DeleteInfobyId: DeleteInfobyId,
    UpdateInfo: UpdateInfo
}
