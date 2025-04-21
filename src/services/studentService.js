export const fetchStudents = async (count = 50) => {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await response.json();
    
    return data.results.map((user, index) => ({
        id: index + 1,
        name: `${user.name.first} ${user.name.last}`,
        rollNo: `22CS${String(index + 1).padStart(3, '0')}`,
        roomNo: `${['A', 'B', 'C'][Math.floor(Math.random() * 3)]}${Math.floor(Math.random() * 400) + 100}`,
        breakfast: false,
        lunch: false,
        dinner: false
    }));
};
