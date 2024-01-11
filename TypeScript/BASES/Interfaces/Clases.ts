(() => {
    interface Xmen {
        name: String;
        realName: String;
        mutantPower(id: Number): String;
    }

    interface Human {
        age: Number;
    }

    class Mutant implements Xmen, Human {
        public age: Number;
        public name: String;
        public realName: String;

        constructor(name: String, realName: String, age: Number) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }

        mutantPower(id: Number): String {
            return this.name + ' ' + this.realName;
        }
    }

    const wolverine = new Mutant('Wolverine', 'Logan', 150);
    console.log(wolverine.mutantPower(123));
})();
