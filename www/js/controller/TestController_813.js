module.exports= function($scope, $state, TestService){
		console.log('enter controller_813')
		$scope.test = TestService.getTest()
	}
