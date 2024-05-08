json.NewEncoder(w).Encode(map[string]interface{}{
	"temperature": celsius,
	"condition":   weatherResponse.Weather[0].Description,
})