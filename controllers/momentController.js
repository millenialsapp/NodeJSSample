class NoteController{

  constructor(){
      this.inMemoryStorage = [
        {id: 1, content: 'Note 1'},
        {id: 2, content: 'Note 2'},
        {id: 3, content: 'Note 3'}
      ]
  }

  getAll() {
    return this.inMemoryStorage;
  }

  getById(id){
    let result = this.inMemoryStorage.filter(note => note.id === id);
    return result? result[0]: null;
  }
}

module.exports = new NoteController();
