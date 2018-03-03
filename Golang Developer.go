package main

import "fmt"

const (
	companyInfo    = "One of Brisbane's most unbelievable success stories"
	companyCulture = "Passionate about achieving and maintaining market dominance through engineering-focused thinking and exceptional product delivery"
	beTechStack    = "Golang microservices built using Golang"
	feTechStack    = "Vue.js"
	recruiterName  = "Harold Liu"
	recruiterEmail = "harold@justdigitalpeople.com.au"
	recruiterPhone = "0400 659 332"
)

var mustHaveSkills = []string{
	"Commercial Golang development",
	"Experience building on highly trafficked web applications",
	"Understanding of multiple microservice design patterns",
	"An interest in building massively scalable and highly elastic web services",
}

var bonusSkills = []string{
	"Experience working with containerization and container orchestration tools",
	"Exceptional pragmatism and strong beliefs that are held loosely",
}

var candidateSkills = map[string]bool{
	"Commercial Golang development":                                   			true,
	"Experience building on highly trafficked web applications":                      	true,
	"Understanding of multiple microservice design patterns": 				true,
	"An interest in building massively scalable and highly elastic web services"		true,
	"Experience working with containerization and container orchestration tools":     	true,
	"Exceptional pragmatism and strong beliefs that are held loosely":                  	true,
}

func main() {
	var rating int

	jobSkills := append(mustHaveSkills, bonusSkills...)

	for _, skill := range jobSkills {
		if candidateSkills[skill] {
			rating++
		}
	}

	if rating >= 4 {
		fmt.Printf("Contact %+v on %+v or %+v\n", recruiterName, recruiterPhone, recruiterEmail)
	} else {
		fmt.Println("Keep trying!")
	}
}

/*See something dumb or incorrect in one of my ads? Let me know! Constructive criticism is always appreciated.

If you have an active GitHub, GitLab, BitBucket or Stack Overflow profile include a link because I want to see it!

Guest writing a job ad could make you famous on the internet - give me a ping if that interests you.

**Harold Liu**</br>
**ph/txt:** 0400 659 332 | **email:** harold@justdigitalpeople.com.au</br>
**Twitter:** @theharold9000</br>
**Youtube:** https://www.youtube.com/user/justdigitalpeople</br>
**Instagram:** justdigitalpeople</br>
**GitHub:** theharold9000</br>
*/
