module.exports= function($scope, $state, TestService){
		console.log('enter controller_945')
		$scope.test = TestService.getTest()
	}
