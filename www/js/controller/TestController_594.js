module.exports= function($scope, $state, TestService){
		console.log('enter controller_594')
		$scope.test = TestService.getTest()
	}
